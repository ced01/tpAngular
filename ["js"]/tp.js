function PersonController($scope){
  $scope.people = [
    {name:'Bob', age: 42, salary: '40000'},
    {name:'Clark', age: 36, salary: '35000'},
    {name:'Alice', age: 21, salary: '37500'}
    ];
  $scope.addPerson = function(){
    var person = {
        name: $scope.name,
        age: $scope.age,
        salary: $scope.salary,
    };
    $scope.people.push(person);
  }; 
  $scope.removePerson = function(index){
    $scope.people.splice(index, 1);
  }; 
  $scope.modificatePerson = function(index){
    if($scope.name != null){
    	$scope.people[index].name = $scope.name;
    }
   
   	if($scope.age != null) {
   		$scope.people[index].age = $scope.age;
   	}

   	if($scope.salary != null) {
   		$scope.people[index].salary = $scope.salary;
   	}
    
  }; 
}