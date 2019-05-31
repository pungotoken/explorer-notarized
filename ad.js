"use strict";

angular.module("insight.ad").controller("AdController", function ($scope, $http) {
    $http.get("http://data.lordofthechains.com/info/ecosystem.json").success(function (data, status, headers, config) {

        ads = {};
        priorities = {};
        data.forEach(function (project) {
            ads[project.projectName] = project.ads;
            priorities[project.projectName] = project.priority;
        });
        // finding the project whose ad has to be displayed now
        for (var key in priorities) {
            if (priorities[key] == "always") {
                var project = key;
            } else if (priorities[key] == "never") {
                delete priorities[key];
            }
        }
        if (!project) {
            var sum = 0;

            for (var key in priorities) {
                sum += parseFloat(priorities[key]);
            }
            ranges = {};
            rangeEnd = 1;
            for (var key in priorities) {
                ranges[key] = [rangeEnd, rangeEnd + parseFloat(priorities[key] - 1)];
                rangeEnd = rangeEnd + parseFloat(priorities[key])
            }
            rand = Math.floor(Math.random() * sum) + 1
            for (var key in ranges) {
                if (rand >= ranges[key][0] && rand <= ranges[key][1]) {
                    var project = key;
                }
            }
        }
        // finding the ad in the selected project

        ads = ads[project];
        allAds = [];
        var sum = 0;
        for (var i = 0; i < ads.length; i++) {
            if (ads[i].frequency == "always") {
                var toDisplay = ads[i].data
            } else if (ads[i].frequency == "never") {

            } else {
                allAds.push(ads[i])
            }
        }

        if (!toDisplay) {
            ranges = [];
            rangeEnd = 1;
            for (i = 0; i < allAds.length; i++) {
                ranges[i] = [rangeEnd, rangeEnd + parseFloat(allAds[i].frequency - 1)];
                rangeEnd = rangeEnd + parseFloat(allAds[i].frequency)
            }
            rand = Math.floor(Math.random() * sum) + 1
            for (i = 0; i < ranges.length; i++) {
                if (rand >= ranges[i][0] && rand <= ranges[i][1]) {
                    var toDisplay = i;
                }
            }
        }
        $scope.toDisplay = toDisplay
    }).error(function () {
        $scope.error = true
    })
});
