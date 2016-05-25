
myApp.controller('symmetraController', ['$scope', function($scope) {
  console.log('symmetra controller running');
  $scope.message = "Symmetra Controller!";
  $scope.name = "Symmetra";
  $scope.bio = "Symmetra literally bends reality. By manipulating hard-light constructs, she crafts the world as she wishes it to be, in hopes of engineering a perfect society. Following the Omnic Crisis, the Vishkar Corporation of southern India began the laborious process of creating new, self-sustaining cities to house the nation's displaced population. One such city, Utopaea, was created using radical hard-light technology that enabled its architechs to shape the city's streets, utilities, and living spaces in the blink of an eye. After she was identified as one of the few capable of becoming a light-bending architech, young Satya Vaswani was plucked from extreme poverty and placed in the care of Vishkar's architech academy, never to return home. Isolated and lonely in her new life, Satya immersed herself in her education and training. She quickly grasped the applications of the technology and was one of the top students in her class. Satya approached hard-light manipulation differently than her peers, with their more procedural, mechanical constructions, instead weaving her constructs in the motions of the traditional dance of her homeland. Though she was one of Utopaea's top architechs, the Vishkar Corporation saw far greater potential in Satya's abilities. Giving her the moniker 'Symmetra,' Vishkar sent her on clandestine missions around the world to uphold its corporate interests and expand its influence into other countries. Symmetra believes her actions serve the greater good in society. But there are times when she wonders whether the control and order she desires are truly best for humanity.";
  $scope.stats = {
    role: 'Support',
    health: 100,
    shield: 100
  };
  $scope.image = "../assets/symmetra.png";
  $scope.clickedBio = false;
  $scope.clickBio = function () {
    $scope.clickedBio = !$scope.clickedBio;
  };
}]);
