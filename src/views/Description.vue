<template>
  <div class="description">
    <div v-for="(description, index) in descriptions" :key="index">
      <p>{{description.title}}</p>
      <h3 v-for="(detail, dIndex) in description.details" :key="'detail'+dIndex">{{detail}}</h3>
      <p class data-rte-preserve-empty="true" style="white-space:pre-wrap;"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  data() {
    return {
      descriptions: [
        {
          title: "Project Description",
          details: [
            `Babel Between Us is an exploration of collaborative 
            literature through a cartographic visualization of a  co-created fiction. 
            A group of 18 writers collectively improvise a story on an online forum during an extensive amount of time. 
            The resulting fiction is analyzed by a team of ethnographers and presented as an interactive web-based map. 
            This map is then presented back to the group of writers throughout the process, 
            so they can adapt their writing or collaboration style (or choose not to). 
            The final map is also presented as an interactive artwork in itself which is open for anyone to explore.`
          ]
        },
        {
          title: "Theoretical Exploration",
          details: [
            `We want to explore new ways to create and present collaboratively written literature. 
            The best way to present a collective creative process is not necessarily in traditional form, 
            but the nature of the process itself may require entirely new media formats to make the content comprehensible.`,
            `By presenting a co-created story as a map, we allow the spectators to explore the world the writers have collectively created. 
            Because they themselves interact with the fiction and find their own ways through the maze, 
            we break up the linear narrative we are otherwise accustomed to. Since the map of the connection 
            between the various posts is the basis of the experience of the work, the written text becomes secondary to the actual story.`
          ]
        },
        {
          title: "Collaborative Process",
          details: [
            `We let 18 invited writers write a co-created fiction for three six-week long iterations. 
            Writing takes place on an online forum where each new posts and comment is considered a unique item. 
            Each such post has a unique timestamp and sender.`,
            `The writers have no other rules except to follow the principle of “yes, and.” 
            This means that we ask the writers to build on each other’s ideas and not hamper or shoot down each other’s creative processes.`
          ]
        },
        {
          title: "Digital Ethnography & SSNA",
          details: [
            `To create the map, we use the latest technology in digital ethnography, called semantic social network analysis (SSNA). 
            The process briefly states that a group of ethnographers analyze all the entries that the writers write on the forum, 
            and gives each record one or more tags that can process all the content, from events to mood, tone, and more. 
            Read more on SSNA in this paper.`,
            `These items and tags are visualized in an interactive network graph, 
            which is the basis for the cartographic visualisation. This map is also presented back to the writers 
            so that they can better understand their own collaborative process, and get an overview over the world they are creating.`
          ]
        },
        {
          title: "Why?",
          details: [
            `Collective writing easily becomes unmanageably sprawling because it is difficult for any single 
            participant to embrace the totality of the fiction they co-create. Unlike improvisation theater, 
            live role-playing and other co-created art forms, collective writing takes place as correspondence 
            where many threads are going on at the same time, while the writers are in very different environments 
            and state of mind.`,
            `The role of the ethnographers is then to show the writers an overview of their collectively created fiction. 
            The interactive network graph allows them to see which themes they themselves have been most involved in 
            and which they have not yet explored, and which writers they often interact with and which they not. 
            They also see which themes often occur together and can explore the history 
            they themselves write from angles they have not seen before, 
            allowing them to consciously allow them to converge or branch.`,
            `The writing takes place in three cycles each lasting six weeks. 
            During the first cycle the writers write without seeing any ethnography. 
            After the first cycle, the ethnographers complete the interactive map, 
            which is then presented to the writers. Then the second cycle begins 
            when the writers continue to write, but now with the map as a reference. 
            After the second cycle, the second round of ethnography is concluded, 
            and the writers then see the new map before they enter the last cycle. 
            Then a final round of ethnography is made to produce the final map.`
          ]
        },
        {
          title: "The Map",
          details: [
            `We intend to exhibit the final map, both as an interactive web-based map free for internet to explore, 
            as well as a physical piece in an exhibition space. Both of these will be designed in the end of the project, 
            when we have data to work with.`,
            `For the audience, exploring the map becomes a boundless discovery of a world, 
            where you yourself put together how everything is connected. 
            The map becomes a book without beginning nor end.`,
            `For those who want to dive into the methods used all source material will be available, 
            including interactive tools for exploring the graphs in the SSNA software used by the ethnographers. 
            The project will also result in a research report describing 
            how we have developed the technology behind SSNA and its application.`
          ]
        },
        {
          title: "Collaboration with academia",
          details: [
            `Babel Between Us is an exploration of collaborative 
            literature through a cartographic visualization of a  co-created fiction. 
            A group of 18 writers collectively improvise a story on an online forum during an extensive amount of time. 
            The resulting fiction is analyzed by a team of ethnographers and presented as an interactive web-based map. 
            This map is then presented back to the group of writers throughout the process, 
            so they can adapt their writing or collaboration style (or choose not to). 
            The final map is also presented as an interactive artwork in itself which is open for anyone to explore.`
          ]
        },
        {
          title: "Aim",
          details: [
            `Our aim is to explore a new literary and artistic practice, 
            based on the self-reinforcing feedback loop between a collaborative creative process on one hand, 
            and new ethnographic frameworks and practices on the other. 
            In this way, we explore the possibilities for how literature and ethnography 
            can interact in new forms of expression, while at the same time testing the boundaries of both areas, 
            as well as creating a new kind of art - perched somewhere in between a novel, experimental academia, and a LARP.`
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.description {
  margin: 20px 0px;
}
p {
  text-align: left;
  font-weight: 400;
  font-style: normal;
  line-height: 1.6em;
  font-size: 18px;
  margin: 0 0 1.6em;
}
h3 {
  text-align: left;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5em;
  font-size: 14px;
  letter-spacing: 0.05em;
  margin-block-start: 1em;
  color: rgba(28, 32, 24, 0.7);
}
</style>