"use strict";

angular.module("insight.ad").controller("AdController", function ($scope, $http) {
    $http.get("https://api.myjson.com/bins/159h0b").success(function (data, status, headers, config) {

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

        allAds = ads[project];
        ads = {};
        allAds.forEach(function (ad) {
            ads[ad.string] = ad.frequency;
        });
        for (var key in ads) {
            if (ads[key] == "always") {
                var toDisplay = key;
            } else if (ads[key] == "never") {
                delete ads[key];
            }
        }
        if (!toDisplay) {
            var sum = 0;

            for (var key in ads) {
                sum += parseFloat(ads[key]);
            }
            ranges = {};
            rangeEnd = 1;
            for (var key in ads) {
                ranges[key] = [rangeEnd, rangeEnd + parseFloat(ads[key] - 1)];
                rangeEnd = rangeEnd + parseFloat(ads[key])
            }
            rand = Math.floor(Math.random() * sum) + 1
            for (var key in ranges) {
                if (rand >= ranges[key][0] && rand <= ranges[key][1]) {
                    var toDisplay = key;
                }
            }
        }
        $scope.ad = toDisplay
    }).error(function () {
        $scope.error = true
    })
});