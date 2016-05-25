myApp.controller('soldierController', ['$scope', function($scope) {
  console.log('soldier controller running');
  $scope.message = "Soldier Controller!";
  $scope.name = "Soldier: 76";
  $scope.bio = "Currently the target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch's collapse. Soldier: 76 revealed himself in a string of attacks that crisscrossed the globe, targeting financial institutions, shadowy corporations, and secure Overwatch facilities. Though to the outside world his motives are inscrutable, there are those who claim that he is a former Overwatch agent, determined to shed light on the conspiracy that brought down the organization. While his true identity remains a mystery, he is believed to have been trained as a member of the American 'soldier enhancement program'. He possesses physical capabilities exceeding those of a conventional soldier's, as well as other augmentations that make him a peerless combatant. In addition, he utilizes a cutting-edge arsenal, much of it stolen in raids on Overwatch installations.";
  $scope.stats = {
    role: "Offense",
    health: 200,
    shield: 0
  };
$scope.image = "../assets/soldier76.png";

$scope.clickedBio = false;
$scope.clickBio = function () {
  $scope.clickedBio = !$scope.clickedBio;
  console.log($scope.clickedBio);
};
}]);
