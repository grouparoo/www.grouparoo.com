import { Card, Badge } from "react-bootstrap";
import {
  getPluginDisplay,
  PluginDisplay,
  PluginTypes,
} from "../../../data/plugins";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import styles from "./IntegrationCard.module.scss";

const IntegrationBadge = ({ type }: { type?: PluginTypes }) =>
  type ? (
    <div className={"me-1 code"}>
      <Badge
        pill
        bg={type === "source" ? "info" : "warning"}
        className={styles.badge}
      >
        {type}
      </Badge>
    </div>
  ) : null;

const SmallIntegration = ({ slug }: { slug: string }) => {
  const plugin = getPluginDisplay(slug);

  return (
    <div>
      <Image
        src={plugin.logoPath}
        alt={`${plugin.name} integration`}
        height={80}
        width={80}
      />
    </div>
  );
};

interface IntegrationCardProps {
  slug: string;
  type?: PluginTypes;
  otherType?: PluginTypes;
  category?: string;
  tag?: string;
  showLink?: boolean;
}

const IntegrationCardDetail = ({
  plugin,
  category,
  showLink = true,
  type,
  otherType,
}: IntegrationCardProps & {
  plugin: PluginDisplay;
}) => (
  <div className={`h-100 ${styles.cardDetail}`}>
    <Card className={`${showLink ? styles.integrationCardLink : ""} h-100`}>
      <Card.Body className="d-flex flex-column align-items-center">
        <SmallIntegration slug={plugin.slug} />
        <Card.Text className={`${styles.pluginName} bold`}>
          {plugin.name}
        </Card.Text>

        <div className="d-flex justify-content-evenly">
          <IntegrationBadge type={type} />
          <IntegrationBadge type={otherType} />
        </div>

        {category && (
          <div>
            <Badge pill bg="primary" className="text-wrap m-1">
              {" "}
              {category.toUpperCase()}
            </Badge>
          </div>
        )}
      </Card.Body>
    </Card>
  </div>
);

interface IntegrationCardProps {
  slug: string;
  type?: PluginTypes;
  otherType?: PluginTypes;
  category?: string;
  tag?: string;
  showLink?: boolean;
}

export const IntegrationCard = (props: IntegrationCardProps) => {
  const { slug, type, showLink = true } = props;
  const plugin = getPluginDisplay(slug);
  const card = useMemo(
    () => <IntegrationCardDetail {...props} plugin={plugin} />,
    [plugin, props]
  );

  return (
    <div>
      {showLink ? (
        <Link href={`/integrations/${type}s/${slug}`} passHref={true}>
          <a>{card}</a>
        </Link>
      ) : (
        card
      )}
    </div>
  );
};
