import { getSiteConfig } from "@/lib/edge-config";
import { MyWrapper } from "@/lib/edge-config-context";


export default async function SiteConfigWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteConfig = await getSiteConfig();

  return <MyWrapper siteConfig={siteConfig}>{children}</MyWrapper>;
}