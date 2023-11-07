function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'app/views/skills-member.html'
    };
}

skillsMember.$inject = [];
angular.module('app').directive('skillsMember', skillsMember);
skillsMember();