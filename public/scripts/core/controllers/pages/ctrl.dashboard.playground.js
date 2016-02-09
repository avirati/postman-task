'use strict';

/**
 * @author Avinash Verma
 *
 * Playground Controller
 *
 * @example N/A
 *
 * @param {Scope} $scope: scope of the container
 */
angular.module('gameTime')
	.controller('ctrl.dashboard.playground', [
		'$scope',
		'$timeout',
		'$state',
		'$stateParams',
		'httpFactory',
		'PrimusFactory',

		function ( $scope, $timeout, $state, $stateParams, httpFactory, PrimusFactory ) {
			window.scope = $scope;
			//$scope variables
			angular.extend($scope, {

			})

			//$scope methods
			angular.extend($scope, {
				joinRoom: function () {
					PrimusFactory.methods.joinRoom($scope.login_data.user, $stateParams.roomId);
				},
				getRoom: function (id) {
					httpFactory.getRoom(id)
							.success(function ( res ) {
								$scope.currentRoom = res.data[0];
								if(Object.keys($scope.currentRoom).length === 0) {
									$state.go('dashboard.rooms');
								}
							})
							.error(function ( res ) {
								Materialize.toast(res.info, 4000);
							})
				},
				sendChat: function () {
					PrimusFactory.methods.sendChat($scope.login_data.user, $scope.chatMsg, $stateParams.roomId);
					$scope.chatMsg = '';
				},
				scrollChatToBottom: function (id) {
					var msgBox = document.getElementById('chat-log');
					if (msgBox)
						$timeout(function () {
							msgBox.scrollTop = msgBox.scrollHeight
						}, 200)
					else
						$timeout(function () {
							$scope.scrollChatToBottom(id)
						}, 200);
				},
				allowUser: function (user) {
					PrimusFactory.methods.allowUser($scope.login_data.user, user, $stateParams.roomId);
				},
				isAccessDisabled: function () {
					if(!$scope.currentRoom) {
						return true;
					}
					var isDisabled = true;

					$scope.currentRoom.players.map(function (o) {
						if(o.user === $scope.login_data.user) {
							if(!o.allowed) {
								isDisabled = true;
							}
							else {
								isDisabled = false;
							}
						}
					})

					return isDisabled;
				},
				init: function () {
					$scope.joinRoom();
					$scope.getRoom($stateParams.roomId);

					$scope.$on('update_room', function () {
						$scope.getRoom($stateParams.roomId);
					})

					$scope.$on('room_communication', function (event, data) {
						$scope.currentRoom.chat_logs.push(data);
						$scope.scrollChatToBottom()
					})
				}
			})

			$scope.init();

		}]);
