
myApp.controller('hanzoController', ['$scope', function($scope) {
  console.log('hanzo controller running');
  $scope.message = "Hanzo Controller!";
  $scope.name = "Hanzo";
  $scope.bio = "Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer. The Shimada family was established centuries ago, a clan of assassins whose power grew over the years, enabling them to build a vast criminal empire that profited from lucrative trade in arms and illegal substances. As the eldest son of the family's head, Hanzo was bound by duty to succeed his father and rule the Shimada empire. From a young age, he was trained for that responsibility, displaying a natural aptitude for leadership and possessing an innate understanding of strategy and tactics. He also excelled in more practical areas: he was a prodigy in martial arts, swordplay, and bowmanship. Upon the death of his father, the clan elders instructed Hanzo to straighten out his wayward younger brother so that he, too, might help rule the Shimada empire. When his brother refused, Hanzo was forced to kill him. This act broke Hanzo's heart and drove him to reject his father's legacy, ultimately leading him to abandon the clan and all that he had worked so hard to attain. Now, Hanzo travels the world, perfecting his skills as a warrior, attempting to restore his honor and put the ghosts of his past to rest.";
  $scope.stats = {
    role: 'Defense',
    health: 200,
    shield: 0
  };
  $scope.image = "../assets/hanzo.png";
  $scope.clickedBio = false;
  $scope.clickBio = function () {
    $scope.clickedBio = !$scope.clickedBio;
  };
}]);
