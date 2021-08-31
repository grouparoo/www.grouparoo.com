import Link from "next/link";
import { PluginData } from "../../../data/plugins";
import CodeBlock from "./codeBlock";

import { Alert } from "../index";

const PluginDocsCalculatedPropertySource = ({ plugin }: { plugin: string }) => {
  const pluginData = PluginData.find(
    ({ name }) => name === "CalculatedProperty"
  );
  const codeBlocks = {
    config: `
exports.default = async function buildConfig() {
  return [
    // --- Source ---
    {
      class: "source",
      id: "calculated_source",
      name: "calculated_source",
      type: "calculated-property-import",
      appId: "my_calculated_property_app",
    }
  `,
    property: `
    exports.default = async function buildConfig() {
      return [
        {
          id: "full_name",
          name: "full_name",
          class: "property",
          sourceId: "calculated_source", 
          type: "string", 
          unique: false,
          identifying: false, 
          isArray: false, 
          options: {
            customFunction: customFunction, 
          },
          filters: null,
        },
      ];
    };
    
    function customFunction() {
      // write your custom function here
      // use mustache variables to reference the keys of any properties you would like to reference
    }
  `,
    customFunction: `
    function customFunction() {
      return "{{firstName}} {{lastName}}"
    }
  `,
    customFunctionProfit: `
  function customFunction() {
    return parseFloat("{{total_sales}}") - parseFloat("{{total_cost}}")
  }
`,
    customFunctionPhone: `
  function customFunction() {
    return "{{cell_phone_number}}" || "{{work_phone_number}}" || "{{home_phone_number}}" || null;
  }
`,
  };

  return (
    <>
      {/* --- Source --- */}
      <h2 id={`create-calculated-property-source`}>
        Create a Calculated Property Source
      </h2>
      <p>
        The Calculated Property Source is a specific type of Source. The focus
        of the Calculated Property plugin is the ability generate custom
        properties based upon a JavaScript function in the Property
        configuration.
      </p>
      <p>
        However, in order to generate the property, though, we will first need
        to generate a parent source.
      </p>
      <p>
        You can generate a Calculated Property Source using the{" "}
        <code>generate</code> command. You must specify a <code>parent</code>,
        which should match the <code>id</code> of the App you created.
      </p>
      <p>
        This is the simplest form of{" "}
        <Link href="/docs/getting-started/product-concepts#generator">
          Generator
        </Link>{" "}
        you can use for Calculated Property Sources:
      </p>

      <CodeBlock
        code={`grouparoo generate calculated-property:source calculated_source --parent my_calculated_property_app`}
        cli={true}
      />
      <p>
        This generates a file at <code>config/sources/users</code>. Calculated
        Property Sources act primarily as placeholders. The real fun comes when
        we get to the Property configuration.
      </p>

      {/* --- Property --- */}
      <h3 id="calculated-property-properties">
        Calculated Property Properties
      </h3>
      <p>
        After you generate a Source, we get to see the real power of Calculated
        Properties by generating our first one. You can do this through the CLI:
      </p>
      <CodeBlock
        code={`grouparoo generate calculated-property:property full_name --parent calculated_source`}
        cli={true}
      />
      <Alert variant="primary">
        <p className="mb-1">
          <strong>Pro Tip!</strong>
        </p>
        <p className="mb-0">
          Note that the parent source of a Calculated Property is{" "}
          <em>always</em> a Calculated Property Source, even if the Property
          itself references Properties from other Sources.
        </p>
      </Alert>
      <p>
        The Property generator will drop individual a file in the{" "}
        <code>config/properties</code> directory. Edit this file to match your
        desired configuration.
      </p>

      <CodeBlock code={codeBlocks.property} language="javascript" />

      {/* --- Properties -> Options --- */}

      <h4 id="calculated-property-options">
        Calculated Property Custom Function
      </h4>

      <p>
        The Property config object for Calculated Properties has a single
        option. This option is the <code>customFunction</code> option and it is
        where the real magic happens with Calculated Properties.
      </p>
      <p>
        At the bottom of your config file for a Calculated Property, there will
        be an empty function called <code>customFunction</code>. Here, you can
        write how you would like to generate your new Property.
      </p>
      <p>
        Custom functions can do anything from string concatenation or splitting,
        to performing calculations, to returning a conditional value. Your
        custom function must return a value, though that value is allowed to be
        <code>null</code>.
      </p>
      <p>
        To reference other Grouparoo Properties, use mustache variables to refer
        to the key of that property. A Property's key can be found in its config
        file. If no key is present, the default key is a Property's id.
      </p>
      <p>
        To calculate a <code>full_name</code> Property, you would fill in the
        configuration as follows using{" "}
        <a
          href="https://github.com/janl/mustache.js#variables"
          target="_blank"
          rel="noreferrer"
        >
          mustache variables
        </a>{" "}
        to reference existing properties:
      </p>
      <CodeBlock code={codeBlocks.customFunction} language="javascript" />
      <p>
        <code>customFunction</code> is executed Profile by Profile, so the value
        of each Profile's <code>first_name</code> and <code>last_name</code>{" "}
        Properties are parsed directly into the function, which is why it is
        quoted in order to evaluate as and return a string.
      </p>
      <p>
        You can write <code>customFunction</code>s using <code>string</code>,{" "}
        <code>number</code>, <code>boolean</code>, and
        <code>date</code> property types. All mustached variables are returned
        as the string value of their value. This means if you want to use an
        integer or float type for calculation, you will have to parse it. For
        example:
        <CodeBlock
          code={`const ltv = parseFloat("{{ltv}}")`}
          language="javascript"
        />
      </p>
      <p>
        For example, to use an existing property <code>total_cost</code> and{" "}
        <code>total_sales</code>
        to calculate a <code>profit_margin</code> property, I could run:
      </p>
      <CodeBlock code={codeBlocks.customFunctionProfit} language="javascript" />
      <p>
        You can also do coalescing. For example, say you want to add a
        `primary_phone` and your first pick is `cell_phone_number`, if there
        isn't a cell, you want `work_phone_number`, and if there isn't one of
        those a `home_phone_number`, otherwise you want `null`.:
      </p>
      <CodeBlock code={codeBlocks.customFunctionPhone} language="javascript" />
      <p>
        A Calculated Property's `customFunction` can use whatever synchronous
        JavaScript you would like to generate your property. Please note that:
        <ul>
          <li>Using `require` is not currently supported</li>
          <li>Async functions are not currently supported</li>
          <li>
            Your function must return a value (or `null`, but not `undefined`)to
            pass validation
          </li>
        </ul>
      </p>
    </>
  );
};

export default PluginDocsCalculatedPropertySource;
