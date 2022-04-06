import React from "react";
import coverImage from "../assets/glacier.jpeg";

function AboutUs() {
  return (
    <section className="my-5">
      <img src={coverImage} alt="About Us"></img>
      <div>
        <h2 style={{ backgroundColor: "lightblue" }}>
          Not ALL water is the same!
        </h2>
        <p>
          Water is the source of life. Without water we wouldn't be able to
          survive. But all water is not created equal!
        </p>
        <h4>
          There are different criteria that are considered to classify these
          different waters.
        </h4>
        <h2 style={{ backgroundColor: "lightblue" }}>
          Source: Where did the water actually come from?
        </h2>
        <p>
          Source is a major component. Different sources are, Spring, Artesian,
          Rain, Iceberg, Glacier, and Deep Sea. The importance of these sources,
          all have to do with the actual mineral composition of what is in the
          water. Different minerals, such as Silica, Magnesium and Sodium are as
          important to your diet as Protein is (which is found in our food). And
          of course being naturally occuring, it is the best for your body.
        </p>
        <h2 style={{ backgroundColor: "lightblue" }}>
          TDS (Total Dissolved Solids):
        </h2>
        <p>
          What is actually in the water? Different minerals, from naturally
          occuring sources, over time making it into our favorite water. The
          actual amount that makes into the water, drastically changes the
          flavor and nutrition of the water you choose.
        </p>
        <h2 style={{ backgroundColor: "lightblue" }}>Sparkling or Still?</h2>
        <p>When asked this at a restaurant, what do you usually answer?</p>
        <p>
          What is the significance of this? Did a person put those bubbles in?
          or did Mother Earth? "Well, I don't like my water with bubbles!" Thats
          ok, there is STILL water available for you too. There is no such thing
          as a “best water,” just as there is no best wine. Very few people
          would ask “What is the best wine? The joy of being a foodie is
          understanding that wine should be enjoyed for being different and
          providing different experiences in a variety of contexts. What is the
          best wine? I would answer this by asking, “Is it Summer or Winter?
          What am I eating? Am I alone or in company?” In the same way as there
          is no best wine, there is no best water and we should not look for it
          but rather enjoy it as a natural product with terroir that expresses
          many different experiences.
        </p>
        <>Water is Life! Enjoy It!</>
      </div>
    </section>
  );
}

export default AboutUs;
