import RichText from "./RichText";

export default function Hero(props: any) {
  return (
    <section>
      <RichText richTextHtml={props.headline} />
      <RichText richTextHtml={props.subline} />
    </section>
  );
}
