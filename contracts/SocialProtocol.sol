// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "hardhat/console.sol";

contract SocialProtocol {
    struct Endorsement {
        address endorser;
        uint256 skillId;
    }

    struct User {
        bool isActive;
        bool isOrganization;
    }

    mapping(address => Endorsement[]) endorsements;
    mapping(address => User) users;
    mapping(uint256 => string) skills;

    uint256 skillIndex;

    constructor() {}

    function initializeUser(bool _isOrganization) public {
        users[msg.sender] = User(true, _isOrganization);
    }

    function endorse(address _userAddress, uint256 _skillId) public {
        endorsements[_userAddress].push(Endorsement(msg.sender, _skillId));
    }

    function getEndorsements() public view returns (Endorsement[] memory) {
        return endorsements[msg.sender];
    }

    function addSkill(string memory _skillName) public returns (uint256) {
        skills[skillIndex] = _skillName;
        return skillIndex++;
    }

    function getSkill(uint256 _skillId) public view returns (string memory) {
        return skills[_skillId];
    }

    function getSkillIndex() public view returns (uint256) {
        return skillIndex;
    }

    function isUserActive(address _userAddress) public view returns (bool) {
        return users[_userAddress].isActive;
    }

    function isOrganization(address _userAddress) public view returns (bool) {
        return users[_userAddress].isOrganization;
    }
}
