import React from "react";

function AboutUs() {
    return (
      <section className="my-5">
        <img src="../public/glacier.jpeg" alt="" />
        <div className="my-2">
          <h2>
          Not ALL water is created equal. How is that possible you may ask?
          </h2>
          <p>
            Well, there are different criteria that are considered in order to
            classify these different waters.
          </p>
          <h3>
          Source: Where did the water actually come from?
          </h3>
          <h2>
          TDS (Total Dissolved Solids)
          <h4>
          What is actually in the water? Different minerals, from
            naturally occuring sources, overtime make it into our favorite
            watering holes.
          </h4>
          </h2>
          <p>
              The outcome is the visua aspect and most importantly,
            the overall taste. (And of course Nutrition) 
            Bubbles: Is it sparkiling?
            did a person put those bubbles in? or did Mother Earth? "Well, I don't
            like my water with bubbles!" Thats ok, there is STILL water available
            to you too. (but this is where it gets tricky, we'll talk about that
            much later.)
          </p>
        </div>
      </section>
    );
  }

export default AboutUs;