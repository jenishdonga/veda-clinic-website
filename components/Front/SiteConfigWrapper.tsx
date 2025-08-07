import { siteConfig } from "@/lib/site";
import { MyWrapper } from "@/lib/edge-config-context";


export default async function SiteConfigWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MyWrapper siteConfig={siteConfig}>{children}</MyWrapper>;
}