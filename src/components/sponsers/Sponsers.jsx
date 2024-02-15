import SponserBox from "../sponser-box/SponsorBox";

const Sponsers = () => {
  return (
    <div className="mt-10 border-y border-textShade py-4">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          Our <span className="text-main">Sponsers</span>
        </h1>
        <p className="text-textShade mt-3 mx-2 md:mx-0">
          As a user, it is important to have a positive experience when using a
          website or app
        </p>
      </div>

      <div className="my-8 bg-offWhite border-2 border-lightBlue py-4 flex justify-center items-center gap-6 flex-col md:flex-row ">
        <SponserBox src={"/imgs/netflix.png"} alt={"Netflix Logo"} />
        <SponserBox src={"/imgs/discord.svg"} alt={"Discord Logo"} />
        <SponserBox src={"/imgs/webflow.svg"} alt={"WebFlow Logo"} />
        <SponserBox src={"/imgs/asana.svg"} alt={"Asana Logo"} />
        <SponserBox src={"/imgs/slack.svg"} alt={"Slack Logo"} />
        <SponserBox src={"/imgs/atlassian.svg"} alt={"Atlassian Logo"} />
        <SponserBox src={"/imgs/jira.svg"} alt={"Jira Logo"} />
        <SponserBox src={"/imgs/confluence.svg"} alt={"Confluence Logo"} />
        <SponserBox src={"/imgs/spotify.png"} alt={"Spotify Logo"} />
      </div>
    </div>
  );
};

export default Sponsers;
