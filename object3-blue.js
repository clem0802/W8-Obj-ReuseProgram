/*----------------------------------*/
// League Games (blue - Proficiency project1)
var player = {
    playerName: "Leo",
    goalsScored: 4,
    gamesPlayed: 2
  };
  
var team = {
    teamName: "Lions",
    numberPlayers: 18,
    varsity: true,
    member: player
  };
  
console.log(team);


/*----------------------------------*/
// Stream It Again (blue - Proficiency project2)
https://dev.getmimo.com/project/1779?week=5&track=50&course=1779&chapter=11743&lesson=1
var show = {
    name: "Pick and Shorty",
    views: 10,
    play: function(){
      var showName = this.name;
      console.log("Now Playing " + showName);
    },
    addViews: function(numberViews){
      this.views = this.views + numberViews;
      return this.views();
    }
};
   
show.play();
console.log(show.addViews(1));