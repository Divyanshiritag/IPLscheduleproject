import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

function MatchDetail() {
  let { id } = useParams();

  let fixedData = {
    matchInfo: {
      matchId: 91645,
      matchDescription: "58th Match",
      matchFormat: "T20",
      matchType: "league",
      complete: true,
      domestic: false,
      matchStartTimestamp: 1715263200000,
      matchCompleteTimestamp: 1715278207639,
      dayNight: false,
      year: 2024,
      state: "complete",
      team1: {
        id: 65,
        name: "Punjab Kings",
        playerDetails: [
          {
            id: 6507,
            name: "Bairstow",
            fullName: "Jonny Bairstow",
            nickName: "Bairstow",
            captain: false,
            role: "WK-Batsman",
            keeper: true,
            substitute: false,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm medium",
            teamName: "PBKS",
            faceImageId: 351851,
            isOverseas: true,
          },
          {
            id: 14254,
            name: "Prabhsimran",
            fullName: "Prabhsimran Singh",
            nickName: "Prabhsimran",
            captain: false,
            role: "WK-Batsman",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "",
            teamName: "PBKS",
            faceImageId: 226515,
          },
          {
            id: 2244,
            name: "Rossouw",
            fullName: "Rilee Rossouw",
            nickName: "Rossouw",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "LEFT",
            bowlingStyle: "Right Arm off break",
            teamName: "PBKS",
            faceImageId: 244768,
            isOverseas: true,
          },
          {
            id: 10045,
            name: "Livingstone",
            fullName: "Liam Livingstone",
            nickName: "Livingstone",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm leg break",
            teamName: "PBKS",
            faceImageId: 351856,
            playingXIChange: "IN",
            isOverseas: true,
          },
          {
            id: 10919,
            name: "Shashank Singh",
            fullName: "Shashank Singh",
            nickName: "Shashank Singh",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm medium",
            teamName: "PBKS",
            faceImageId: 182026,
          },
          {
            id: 10420,
            name: "Sam Curran",
            fullName: "Sam Curran",
            nickName: "Sam Curran",
            captain: true,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "LEFT",
            bowlingStyle: "Left Arm fast medium",
            teamName: "PBKS",
            faceImageId: 351581,
            isOverseas: true,
          },
          {
            id: 13497,
            name: "Ashutosh Sharma",
            fullName: "Ashutosh Sharma",
            nickName: "Ashutosh Sharma",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "",
            teamName: "PBKS",
            faceImageId: 182026,
          },
          {
            id: 8175,
            name: "Harshal Patel",
            fullName: "Harshal Patel",
            nickName: "Harshal Patel",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm fast medium",
            teamName: "PBKS",
            faceImageId: 244974,
          },
          {
            id: 12087,
            name: "Rahul Chahar",
            fullName: "Rahul Chahar",
            nickName: "Rahul Chahar",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm leg break",
            teamName: "PBKS",
            faceImageId: 226225,
          },
          {
            id: 13217,
            name: "Arshdeep Singh",
            fullName: "Arshdeep Singh",
            nickName: "Arshdeep Singh",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "LEFT",
            bowlingStyle: "Left Arm fast medium",
            teamName: "PBKS",
            faceImageId: 244971,
          },
          {
            id: 13977,
            name: "Vidhwath Kaverappa",
            fullName: "Vidhwath Kaverappa",
            nickName: "Kaverappa",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm fast medium",
            teamName: "PBKS",
            faceImageId: 182026,
            playingXIChange: "IN",
            inMatchChange: "MOUT",
          },
          {
            id: 14452,
            name: "Harpreet Brar",
            fullName: "Harpreet Brar",
            nickName: "Harpreet Brar",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "LEFT",
            bowlingStyle: "Left arm orthodox",
            teamName: "PBKS",
            faceImageId: 226471,
            playingXIChange: "OUT",
            splSubstitute: true,
            isOverseas: false,
          },
          {
            id: 8616,
            name: "Rishi Dhawan",
            fullName: "Rishi Dhawan",
            nickName: "Rishi Dhawan",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm fast medium",
            teamName: "PBKS",
            faceImageId: 151723,
            splSubstitute: true,
            isOverseas: false,
          },
          {
            id: 12335,
            name: "T Thyagarajan",
            fullName: "Tanay Thyagarajan",
            nickName: "Thyagarajan",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "LEFT",
            bowlingStyle: "",
            teamName: "PBKS",
            faceImageId: 182026,
            splSubstitute: true,
          },
          {
            id: 10214,
            name: "Jitesh Sharma",
            fullName: "Jitesh Sharma",
            nickName: "Jitesh Sharma",
            captain: false,
            role: "WK-Batsman",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "",
            teamName: "PBKS",
            faceImageId: 226474,
            playingXIChange: "OUT",
            inMatchChange: "MIN",
            splSubstitute: true,
          },
          {
            id: 15480,
            name: "Nathan Ellis",
            fullName: "Nathan Ellis",
            nickName: "Nathan Ellis",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm fast medium",
            teamName: "PBKS",
            faceImageId: 226248,
            splSubstitute: true,
            isOverseas: true,
          },
          {
            id: 9585,
            name: "Rabada",
            fullName: "Kagiso Rabada",
            nickName: "Rabada",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "LEFT",
            bowlingStyle: "Right Arm fast",
            teamName: "PBKS",
            faceImageId: 351849,
            playingXIChange: "OUT",
          },
          {
            id: 6322,
            name: "Harpreet Singh",
            fullName: "Harpreet Singh Bhatia",
            nickName: "Harpreet Singh",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "LEFT",
            bowlingStyle: "Right Arm medium",
            teamName: "PBKS",
            faceImageId: 153367,
          },
          {
            id: 1446,
            name: "Dhawan",
            fullName: "Shikhar Dhawan",
            nickName: "Dhawan",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "LEFT",
            bowlingStyle: "Right Arm off break",
            teamName: "PBKS",
            faceImageId: 170660,
          },
          {
            id: 6670,
            name: "Chris Woakes",
            fullName: "Chris Woakes",
            nickName: "Woakes",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm fast medium",
            teamName: "PBKS",
            faceImageId: 351569,
          },
          {
            id: 13914,
            name: "Atharva Taide",
            fullName: "Atharva Taide",
            nickName: "Atharva Taide",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "LEFT",
            bowlingStyle: "Left arm orthodox",
            teamName: "PBKS",
            faceImageId: 182026,
          },
          {
            id: 41295,
            name: "Shivam Singh",
            fullName: "Shivam Singh",
            nickName: "Shivam Singh",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm off break",
            teamName: "PBKS",
            faceImageId: 182026,
          },
          {
            id: 53478,
            name: "Prince Choudhary",
            fullName: "Prince Choudhary",
            nickName: "Prince Choudhary",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm leg break",
            teamName: "PBKS",
            faceImageId: 182026,
          },
          {
            id: 53496,
            name: "Vishwanath Singh",
            fullName: "Vishwanath Singh",
            nickName: "Vishwanath Singh",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: true,
            teamId: 65,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm off break",
            teamName: "PBKS",
            faceImageId: 182026,
          },
          {
            id: 42614,
            name: "Trevor Bayliss",
            fullName: "Trevor Bayliss",
            nickName: "Trevor Bayliss",
            role: "Head coach",
            teamId: 65,
            teamName: "PBKS",
            faceImageId: 182026,
            isSupportStaff: true,
          },
          {
            id: 159,
            name: "Brad Haddin",
            fullName: "Brad Haddin",
            nickName: "Haddin",
            role: "Assistant coach",
            teamId: 65,
            teamName: "PBKS",
            faceImageId: 151545,
            isSupportStaff: true,
          },
          {
            id: 215,
            name: "Charl Langeveldt",
            fullName: "Charl Langeveldt",
            nickName: "Langeveldt",
            role: "Fast Bowling coach",
            teamId: 65,
            teamName: "PBKS",
            faceImageId: 182026,
            isSupportStaff: true,
          },
          {
            id: 1814,
            name: "Sanjay Bangar",
            fullName: "Sanjay Bangar",
            nickName: "Bangar",
            role: "Head of Cricket Development",
            teamId: 65,
            teamName: "PBKS",
            faceImageId: 179929,
            isSupportStaff: true,
          },
          {
            id: 1808,
            name: "Sunil Joshi",
            fullName: "Sunil Joshi",
            nickName: "Joshi",
            role: "Spin Bowling Coach",
            teamId: 65,
            teamName: "PBKS",
            faceImageId: 155254,
            isSupportStaff: true,
          },
          {
            id: 1423942,
            name: "Trevor Gonsalves",
            fullName: "Trevor Gonsalves",
            nickName: "Trevor Gonsalves",
            role: "Assistant Bowling Coach",
            teamId: 65,
            teamName: "PBKS",
            faceImageId: 182026,
            isSupportStaff: true,
          },
        ],
        shortName: "PBKS",
      },
      team2: {
        id: 59,
        name: "Royal Challengers Bengaluru",
        playerDetails: [
          {
            id: 1413,
            name: "Kohli",
            fullName: "Virat Kohli",
            nickName: "Kohli",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm medium",
            teamName: "RCB",
            faceImageId: 332891,
          },
          {
            id: 7825,
            name: "du Plessis",
            fullName: "Faf du Plessis",
            nickName: "du Plessis",
            captain: true,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm leg break",
            teamName: "RCB",
            faceImageId: 170639,
            isOverseas: true,
          },
          {
            id: 12258,
            name: "Will Jacks",
            fullName: "Will Jacks",
            nickName: "Will Jacks",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm off break",
            teamName: "RCB",
            faceImageId: 182026,
            isOverseas: true,
          },
          {
            id: 10636,
            name: "Rajat Patidar",
            fullName: "Rajat Patidar",
            nickName: "Rajat Patidar",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm off break",
            teamName: "RCB",
            faceImageId: 234983,
            inMatchChange: "MOUT",
          },
          {
            id: 10954,
            name: "Lomror",
            fullName: "Mahipal Lomror",
            nickName: "Lomror",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "LEFT",
            bowlingStyle: "Left arm orthodox",
            teamName: "RCB",
            faceImageId: 226541,
            playingXIChange: "IN",
          },
          {
            id: 12225,
            name: "Green",
            fullName: "Cameron Green",
            nickName: "Green",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm medium",
            teamName: "RCB",
            faceImageId: 352451,
            isOverseas: true,
          },
          {
            id: 145,
            name: "Karthik",
            fullName: "Dinesh Karthik",
            nickName: "Karthik",
            captain: false,
            role: "WK-Batsman",
            keeper: true,
            substitute: false,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "",
            teamName: "RCB",
            faceImageId: 244969,
          },
          {
            id: 10238,
            name: "Swapnil Singh",
            fullName: "Swapnil Singh",
            nickName: "Swapnil Singh",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Left arm orthodox",
            teamName: "RCB",
            faceImageId: 182026,
          },
          {
            id: 1844,
            name: "Karn Sharma",
            fullName: "Karn Sharma",
            nickName: "Karn Sharma",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "LEFT",
            bowlingStyle: "Right Arm leg break",
            teamName: "RCB",
            faceImageId: 226391,
          },
          {
            id: 10808,
            name: "Siraj",
            fullName: "Mohammed Siraj",
            nickName: "Siraj",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm fast medium",
            teamName: "RCB",
            faceImageId: 352491,
          },
          {
            id: 10692,
            name: "Lockie Ferguson",
            fullName: "Lockie Ferguson",
            nickName: "Ferguson",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm fast",
            teamName: "RCB",
            faceImageId: 351814,
            playingXIChange: "IN",
            isOverseas: true,
          },
          {
            id: 14172,
            name: "Yash Dayal",
            fullName: "Yash Dayal",
            nickName: "Yash Dayal",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "LEFT",
            bowlingStyle: "Left Arm fast medium",
            teamName: "RCB",
            faceImageId: 182026,
            playingXIChange: "OUT",
            inMatchChange: "MIN",
            splSubstitute: true,
          },
          {
            id: 13135,
            name: "Anuj Rawat",
            fullName: "Anuj Rawat",
            nickName: "Anuj Rawat",
            captain: false,
            role: "WK-Batsman",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "LEFT",
            bowlingStyle: "",
            teamName: "RCB",
            faceImageId: 226472,
            splSubstitute: true,
          },
          {
            id: 12669,
            name: "Prabhudessai",
            fullName: "Suyash Prabhudessai",
            nickName: "Prabhudessai",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "",
            teamName: "RCB",
            faceImageId: 182026,
            splSubstitute: true,
          },
          {
            id: 10486,
            name: "Vijaykumar Vyshak",
            fullName: "Vijaykumar Vyshak",
            nickName: "Vijaykumar Vyshak",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm medium",
            teamName: "RCB",
            faceImageId: 182026,
            playingXIChange: "OUT",
            splSubstitute: true,
          },
          {
            id: 10953,
            name: "Mayank Dagar",
            fullName: "Mayank Dagar",
            nickName: "Mayank Dagar",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Left arm orthodox",
            teamName: "RCB",
            faceImageId: 182026,
            splSubstitute: true,
          },
          {
            id: 7662,
            name: "Maxwell",
            fullName: "Glenn Maxwell",
            nickName: "Maxwell",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm off break",
            teamName: "RCB",
            faceImageId: 352454,
            playingXIChange: "OUT",
          },
          {
            id: 14726,
            name: "Akash Deep",
            fullName: "Akash Deep",
            nickName: "Akash Deep",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm medium",
            teamName: "RCB",
            faceImageId: 182026,
          },
          {
            id: 36482,
            name: "Himanshu Sharma",
            fullName: "Himanshu Sharma",
            nickName: "Himanshu Sharma",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm leg break",
            teamName: "RCB",
            faceImageId: 182026,
          },
          {
            id: 8349,
            name: "R Topley",
            fullName: "Reece Topley",
            nickName: "Topley",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Left Arm fast medium",
            teamName: "RCB",
            faceImageId: 351852,
          },
          {
            id: 9522,
            name: "Tom Curran",
            fullName: "Tom Curran",
            nickName: "Tom Curran",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm fast medium",
            teamName: "RCB",
            faceImageId: 170967,
          },
          {
            id: 11220,
            name: "Alzarri Joseph",
            fullName: "Alzarri Joseph",
            nickName: "Alzarri Joseph",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "RIGHT",
            bowlingStyle: "Right Arm fast medium",
            teamName: "RCB",
            faceImageId: 244661,
          },
          {
            id: 13962,
            name: "Manoj Bhandage",
            fullName: "Manoj Bhandage",
            nickName: "Bhandage",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "LEFT",
            bowlingStyle: "Right Arm fast medium",
            teamName: "RCB",
            faceImageId: 182026,
          },
          {
            id: 21686,
            name: "Saurav Chauhan",
            fullName: "Saurav Chauhan",
            nickName: "Saurav Chauhan",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "LEFT",
            bowlingStyle: "Left arm orthodox",
            teamName: "RCB",
            faceImageId: 182026,
          },
          {
            id: 32786,
            name: "Rajan Kumar",
            fullName: "Rajan Kumar",
            nickName: "Rajan Kumar",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: true,
            teamId: 59,
            battingStyle: "LEFT",
            bowlingStyle: "Left Arm fast medium",
            teamName: "RCB",
            faceImageId: 182026,
          },
          {
            id: 3406,
            name: "Andy Flower",
            fullName: "Andy Flower",
            nickName: "Flower",
            role: "Head Coach",
            teamId: 59,
            teamName: "RCB",
            faceImageId: 153350,
            isSupportStaff: true,
          },
          {
            id: 42663,
            name: "Adam Griffith",
            fullName: "Adam Griffith",
            nickName: "Adam Griffith",
            role: "Bowling Coach",
            teamId: 59,
            teamName: "RCB",
            faceImageId: 182026,
            isSupportStaff: true,
          },
          {
            id: 8899,
            name: "Malolan Rangarajan",
            fullName: "Malolan Rangarajan",
            nickName: "Malolan Rangarajan",
            role: "Head of Scouting and Fielding Coach",
            teamId: 59,
            teamName: "RCB",
            faceImageId: 182026,
            isSupportStaff: true,
          },
          {
            id: 1062,
            name: "Neil McKenzie",
            fullName: "Neil McKenzie",
            nickName: "McKenzie",
            role: "Batting Coach",
            teamId: 59,
            teamName: "RCB",
            faceImageId: 154037,
            isSupportStaff: true,
          },
        ],
        shortName: "RCB",
      },
      series: {
        id: 7607,
        name: "Indian Premier League 2024",
        seriesType: "IPL",
        startDate: 1710979200000,
        endDate: 1716768000000,
        seriesFolder: "",
        odiSeriesResult: "",
        t20SeriesResult: "''",
        testSeriesResult: "",
        tournament: true,
      },
      umpire1: {
        id: 8862,
        name: "Nitin Menon",
        country: "IND",
      },
      umpire2: {
        id: 9680,
        name: "Saiyed Khalid",
        country: "IND",
      },
      umpire3: {
        id: 8909,
        name: "Virender Sharma",
        country: "IND",
      },
      referee: {
        id: 11834,
        name: "Rajiv Seth",
        country: "IND",
      },
      tossResults: {
        tossWinnerId: 65,
        tossWinnerName: "Punjab Kings",
        decision: "Bowling",
      },
      result: {
        resultType: "win",
        winningTeam: "Royal Challengers Bengaluru",
        winningteamId: 59,
        winningMargin: 60,
        winByRuns: true,
        winByInnings: false,
      },
      venue: {
        id: 155,
        name: "Himachal Pradesh Cricket Association Stadium",
        city: "Dharamsala",
        country: "India",
        timezone: "+05:30",
        latitude: "32.197790",
        longitude: "76.325811",
      },
      status: "Punjab Kings opt to bowl",
      playersOfTheMatch: [
        {
          id: 1413,
          name: "Kohli",
          fullName: "Virat Kohli",
          nickName: "Kohli",
          captain: false,
          keeper: false,
          substitute: false,
          teamName: "India",
          faceImageId: 332891,
        },
      ],
      playersOfTheSeries: [],
      revisedTarget: {
        reason: "",
      },
      matchTeamInfo: [
        {
          battingTeamId: 59,
          battingTeamShortName: "RCB",
          bowlingTeamId: 65,
          bowlingTeamShortName: "PBKS",
        },
        {
          battingTeamId: 65,
          battingTeamShortName: "PBKS",
          bowlingTeamId: 59,
          bowlingTeamShortName: "RCB",
        },
      ],
      isMatchNotCovered: false,
      HYSEnabled: 1,
      livestreamEnabled: false,
      isFantasyEnabled: true,
      livestreamEnabledGeo: [
        "MA",
        "KW",
        "EG",
        "TN",
        "JO",
        "MR",
        "US",
        "BH",
        "SD",
        "LY",
        "IQ",
        "SA",
        "MU",
        "AE",
        "LB",
        "DJ",
        "SO",
        "SS",
        "YT",
        "MG",
        "YE",
        "RE",
        "OM",
        "DZ",
        "QA",
        "CA",
        "TD",
        "PS",
      ],
      alertType: "auto",
      shortStatus: "RCB won",
      matchImageId: 402283,
    },
    venueInfo: {
      established: 2003,
      capacity: "23000",
      knownAs: null,
      ends: "River End, College End",
      city: "Dharamsala",
      country: "India",
      timezone: "+05:30",
      homeTeam: "Himachal Pradesh, Punjab Kings",
      floodlights: true,
      curator: null,
      profile:
        "<b>Venue description:</b>\n\nSitting at 1457 metres above sea level, the Himachal Pradesh Cricket Association (HPCA) Stadium in Dharamsala, is widely regarded as the most picturesque cricket stadium in the world. With the beautiful Dhauladhar mountain range lacing its backdrop, the HPCA stadium offers one of the most stunning views to its visitors, especially when the mighty peaks are blanketed in snow. \n\nEven though international cricket made its first appearance here only in 2013, the HPCA stadium has already established itself as a world-class cricket destination in a very short time. Best known for being the abode of the Dalai Lama, this quaint little town first found its place on the cricketing world map in 2010, when Chennai Super Kings locked horns with Kings XI Punjab in the Indian Premier League (IPL).\n\n<b>How does the pitch play?</b>\n\nWith India losing their recent T20I against South Africa even after setting an imposing target of 200, one can easily make out that the pitch here usually offers a lot of runs. Since the ground is located at a high altitude, the ball travels faster as well. In addition, the dew becomes a major factor in the evening if you're playing during the September-March period. That's the reason why teams prefer to chase at this venue.\n\nApart from eight IPL games, the ground has also hosted two ODIs. The first ODI at this stadium may have been a dull encounter, but India made up for it by making 330 in their next game here. Virat Kohli made 127 in that match as India managed to beat the West Indies by 59 runs, despite Marlon Samuels cracking a 106-ball 112.\n\nBy <b>Sidhant Maheshwari</b>",
      imageUrl:
        "http://i.cricketcb.com/i/stats/fth/540x303/venue/images/155.jpg",
      ground: "Himachal Pradesh Cricket Association Stadium",
      groundLength: 0,
      groundWidth: 0,
      otherSports: null,
    },
    broadcastInfo: [
      {
        country: "IN",
        broadcaster: [
          {
            broadcastType: "Streaming",
            value: "Jio Cinema",
          },
          {
            broadcastType: "TV",
            value: "Star Sports Network",
          },
        ],
      },
    ],
  };

  const [data, setData] = useState([]);

  async function FetchMatchDetail() {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // FetchMatchDetail()
  }, []);

  return (
    <>
      <div className="text-2xl text-center m-5">MatchDetail</div>
      {/* {
        data.length <=0 ? (<h1>Loading...</h1>) : ( */}
      <InPageNavigation
        teams={[
          fixedData.matchInfo.team1.shortName,
          fixedData.matchInfo.team2.shortName,
        ]}
      >
      {
        fixedData.matchInfo.team1.playerDetails.map((data,i) => (
          <div key={i} className="text-xl m-5">
            <h1>{data.fullName}</h1>
            <h3 className="opacity-50">{data.role}</h3>
          </div>
        ))
      }

      {
        fixedData.matchInfo.team2.playerDetails.map((data,i) => (
          <div key={i} className="text-xl m-5">
            <h1>{data.fullName}</h1>
            <h3 className="opacity-50">{data.role}</h3>
          </div>
        ))
      }
        
      </InPageNavigation>

      {/* )} */}
    </>
  );
}

export default MatchDetail;
