var decisionTitle = "Troubleshoot missing file...";
var decisiondata =
[
	{
		"ID": "VerifyMissingA",
		"Title": "<div class='section'>Verify file is missing</div><div>Open File Explorer and navigate to <b>Clear Cannabis Inc / Accounting Department - Documents</b>.</div>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "VerifyMissingB"
			}
		]
	},
	{
		"ID": "VerifyMissingB",
		"Title": "<div class='section'>Verify file is missing</div><div>If the file isn’t located in this folder, check your personal <b>Documents</b> folder and your <b>Desktop</b>.</div>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "VerifyMissingC"
			}
		]
	},
	{
		"ID": "VerifyMissingC",
		"Title": "<div class='section'>Verify file is missing</div><div>Did you find the file?</div>",
		"Track":
		[
			{
				"Answer": "Yes",
				"Goto": "Done"
			},
			{
				"Answer": "No",
				"Goto": "VerifyWorkingA"
			}
		]
	},
	{
		"ID": "VerifyWorkingA",
		"Title": "<div class='section'>Verify OneDrive is Working</div><div>On the taskbar to the left of the clock, do you see the OneDrive icon as illustrated in Figure 1 below?<div class='centered'><img src='images/Figure1.png' style='width:30vw' /></div></div>",
		"MoreInfo": "OneDrive is the bridge between your computer and the file repositories stored in SharePoint. To access shared files, OneDrive needs to be on and up to date. The following steps will help you troubleshoot basic issues in OneDrive.",
		"Track":
		[
			{
				"Answer": "Yes",
				"Goto": "VerifyWorkingC"
			},
			{
				"Answer": "No",
				"Goto": "VerifyWorkingB"
			}
		]
	},
	{
		"ID": "VerifyWorkingB",
		"Title": "<div class='section'>Verify OneDrive is Working</div><div>Click the <big><b>^</b></big> icon next to the clock to search the hidden icons list for the cloud icon (see Figure 2). Do you see the icon in the hidden icons list?<div class='centered'><img src='images/Figure2.png' style='width: 30vw' /></div></div>",
		"Track":
		[
			{
				"Answer": "Yes",
				"Goto": "VerifyWorkingC"
			},
			{
				"Answer": "No",
				"Goto": "RunOneDriveA"
			}
		]
	},
	{
		"ID": "VerifyWorkingC",
		"Title": "<div class='section'>Verify OneDrive is Working</div><div>Click the cloud icon to bring up a list of recent uploads and downloads from OneDrive. You should see a list of recent items opened by you and your coworkers, as well as the timeframe in which they were downloaded or uploaded. Check the timestamps to make sure the action is current (see Figure 3).<div class='centered'><img src='images/Figure3.png' style='height:40vh' /></div></div>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "ConsultA"
			}
		]
	},
	{
		"ID": "RunOneDriveA",
		"Title": "<div class='section'>Run OneDrive</div><div>Go to the Windows search bar and type <b>OneDrive</b> then press [Enter]. Select <b>OneDrive App</b> from the search menu.</div>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "RunOneDriveB"
			}
		]
	},
	{
		"ID": "RunOneDriveB",
		"Title": "<div class='section'>Run OneDrive</div><div>Did the OneDrive folder appear on your screen without any error?</div>",
		"Track":
		[
			{
				"Answer": "Yes",
				"Goto": "RunOneDriveC"
			},
			{
				"Answer": "No",
				"Goto": "ContactITA"
			}
		]
	},
	{
		"ID": "RunOneDriveC",
		"Title": "<div class='section'>Verify OneDrive is Working</div><div>Are you able to find the cloud icon on the task bar or in the hidden icons menu as shown on figures 1 or 2 below?<div class='centered'><img src='images/Figure1.png' style='width:20vw' /></div><div class='centered'><img src='images/Figure2.png' style='width:25vw' /></div></div>",
		"Track":
		[
			{
				"Answer": "Yes",
				"Goto": "InitializeOneDriveA"
			},
			{
				"Answer": "No",
				"Goto": "ContactITA"
			}
		]
	},
	{
		"ID": "InitializeOneDriveA",
		"Title": "<div class='section'>Initializing OneDrive</div><div>Enabling OneDrive on startup will ensure that OneDrive starts syncing files when you start your computer. If this setting is disabled, then some files may not sync to the <b>Accounting Department - Documents</b> folder, and your co-workers won’t be able to see them.</div>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "InitializeOneDriveB"
			}
		]
	},
	{
		"ID": "InitializeOneDriveB",
		"Title": "<div class='section'>Initializing OneDrive</div><div>Right-click on the taskbar and select <b>Task Manager</b> from the dialog box as shown in Figure 4.<div class='centered'><img src='images/Figure4.png' style='height:40vh' /></div></div>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "InitializeOneDriveC"
			}
		]
	},
	{
		"ID": "InitializeOneDriveC",
		"Title": "<div class='section'>Initializing OneDrive</div><div>In the <b>Task Manager</b> window, select the <b>Startup</b> tab.</div>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "InitializeOneDriveD"
			}
		]
	},
	{
		"ID": "InitializeOneDriveD",
		"Title": "<div class='section'>Initializing OneDrive</div><div>Scroll down and select <b>OneDrive</b> from the applications list.</div>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "InitializeOneDriveE"
			}
		]
	},
	{
		"ID": "InitializeOneDriveE",
		"Title": "<div class='section'>Initializing OneDrive</div><div>Check to see if the application&apos;s status is <b>Enabled</b>. If not, click the <b>Enable</b> button at the bottom of the window as shown in Figure 5.<div class='centered'><img src='images/Figure5.png' style='height:40vh' /></div></div>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "InitializeOneDriveF"
			}
		]
	},
	{
		"ID": "InitializeOneDriveF",
		"Title": "<div class='section'>Initializing OneDrive</div><div>Is the OneDrive service now enabled?</div>",
		"Track":
		[
			{
				"Answer": "Yes",
				"Goto": "ConsultA"
			},
			{
				"Answer": "No",
				"Goto": "ContactITA"
			}
		]
	},
	{
		"ID": "ContactITA",
		"Title": "<font class='Error'>Contact the IT department for assistance.</font>"
	},
	{
		"ID": "ConsultA",
		"Title": "If you still can’t find your file, consult with your co-workers in your department to determine:<ul><li>If the file is saved in a different folder, or</li><li>If the file has been deleted.</li></ul>",
		"Track":
		[
			{
				"Answer": "Next",
				"Goto": "Done"
			}
		]
	},
	{
		"ID": "Done",
		"Title": "<span class='OK'>DONE</span>"
	}
];
var dialog = null;
var gotoMoreInfo = "";
var gotoNext = "";
	var gotoNo = "";
var gotoYes = "";
var recordCount = 0;
var recordHistory = [-1];
var recordIndex = -1;

$(document).ready(function()
{
	// console.log("Ignore the error about XML Parsing...");
	// //	Configure Ajax to allow local load.
	// $.ajaxSetup({
	// 	scriptCharset: "utf-8",
	// 	contentType: "application/json; charset=utf-8"
	// });

	//	Initialize controls.
	$("#buttonYes").hide();
	$("#buttonNo").hide();
	$("#buttonBack").hide();

	configureCurrentPage();

	gotoNext = decisiondata[0].ID;
	console.log(`Goto next: ${gotoNext}`);

	dialog = $("#dialog");
	dialog.dialog(
	{
		autoOpen: false,
		width: 800,
		my: "center top",
		at: "center top + 20",
		of: "window",
		height: ($(window).height() - 100),
		modal: true
	});

	//	Button Events.
	/**
		* Back button clicked.
	 */
	$("#buttonBack").click(function(e)
	{
		console.log("Back clicked...");
		if(recordHistory.length > 1)
		{
			recordHistory.pop();
		}
		if(recordHistory.length > 0)
		{
			recordIndex = recordHistory[recordHistory.length - 1];
		}
		configureCurrentPage();
	});
	/**
		* Next button clicked.
	 */
	$("#buttonNext").click(function(e)
	{
		var index = 0;
		console.log("Next clicked...");
		if(gotoNext)
		{
			//	Directed navigation.
			console.log("Goto Next is specified...");
			index = getPageRecordIndex(gotoNext);
			if(index >= 0)
			{
				recordIndex = index;
				recordHistory.push(index);
				configureCurrentPage();
			}
			else
			{
				//	The ID wasn't found.
				$("#buttonNext").hide();
			}
		}
		else
		{
			//	Natural navigation.
			console.log("Goto Next not specified. Navigate to next row...");
			if(recordIndex + 1 < recordCount)
			{
				//	Move to the next record.
				console.log("Moving to next record...");
				recordIndex ++;
				recordHistory.push(recordIndex);
				configureCurrentPage();
			}
			else
			{
				//	The button should have already been hidden but wasn't.
				$("#buttonNext").hide();
			}
		}
	});
	/**
		* No button clicked.
	 */
	$("#buttonNo").click(function(e)
	{
		var index = getPageRecordIndex(gotoNo);
		
		if(index >= 0)
		{
			recordIndex = index;
			recordHistory.push(index);
			configureCurrentPage();
		}
	});
	/**
		* Yes button clicked.
	 */
	$("#buttonYes").click(function(e)
	{
		var index = getPageRecordIndex(gotoYes);
		
		if(index >= 0)
		{
			recordIndex = index;
			recordHistory.push(index);
			configureCurrentPage();
		}
	});

	//	Other Clicks.
	$("#moreInfo").click(function(e)
	{

		if(gotoMoreInfo)
		{
			dialog.load(gotoMoreInfo);
			// $("#dialog").dialog({
			// 	width: 800,
			// 	my: "center top",
			// 	at: "center top + 20",
			// 	of: "window",
			// 	height: ($(window).height() - 100),
			// 	modal: true
			// });
			dialog.dialog("open");
		}
	});
});

/**
	* Configure the page settings for the page specified by
	* recordIndex.
	*/
function configureCurrentPage()
{
	if(recordIndex >= 0 && decisiondata.length > recordIndex)
	{
			//	Configure the page.
			$("#question").html(decisiondata[recordIndex].Title);
			setButtonVisibility(decisiondata[recordIndex].Track);
			if(decisiondata[recordIndex].MoreInfo)
			{
				// $("#moreInfo").html("<a target=\"_blank\" href=\"" +
				// 	decisiondata[recordIndex].MoreInfo + "\">More Info</a>");
				gotoMoreInfo = decisiondata[recordIndex].MoreInfo;
				$("#moreInfo").show();
			}
			else
			{
				gotoMoreInfo = "";
				$("#moreInfo").hide();
			}
			$("#title").html(decisionTitle);
	}
	else if(recordIndex == -1)
	{
			//	Display the default page.
			$("#question").
				html("Click <span class=\"highlight\">Next</span> to troubleshoot.");
			$("#title").html(decisionTitle);
			$("#buttonYes").hide();
			$("#buttonNo").hide();
			$("#buttonBack").hide();
			$("#buttonNext").show();
			$("#moreInfo").hide();
			gotoNext = "";
			gotoNo = "";
			gotoYes = "";
	}
}

/**
	* Return the record ID of the page to find.
	* @param {string} pageID The unique name of the page to find.
	* @returns {number} A number greater than or equal to 0 if
	*		the page was found. Otherwise, -1.
	*/
function getPageRecordIndex(pageID)
{
	var count = decisiondata.length;
	var index = 0;
	var result = -1;

	for(; index < count; index ++)
	{
		if(decisiondata[index].ID == pageID)
		{
			result = index;
			break;
		}
	}
	return result;
}

/**
	* Set the button visibility according to the current page choice.
	* @param {object} trackItems Array of track items.
	*/
function setButtonVisibility(trackItems)
{
	var bBack = false;
	var bNext = false;
	var bNo = false;
	var bYes = false;
	var count = 0;
	var index = 0;

	if(recordIndex >= 0)
	{
		bBack = true;
	}
	if(trackItems)
	{
		count = trackItems.length;
		for(; index < count; index ++)
		{
			switch(trackItems[index].Answer)
			{
				case "Yes":
					console.log("[Yes] choice found...");
					bYes = true;
					gotoYes = trackItems[index].Goto;
					break;
				case "No":
					console.log("[No] choice found...");
					bNo = true;
					gotoNo = trackItems[index].Goto;
					break;
				case "Next":
					console.log("[Next] choice found...");
					bNext = true;
					if(trackItems[index].Goto)
					{
						gotoNext = trackItems[index].Goto;
					}
					else
					{
						gotoNext = "";
					}
					break;
			}
		}
	}
	if(bBack)
	{
		$("#buttonBack").show();
	}
	else
	{
		$("#buttonBack").hide();
	}
	if(bNext)
	{
		$("#buttonNext").show();
	}
	else
	{
		$("#buttonNext").hide();
	}
	if(bNo)
	{
		$("#buttonNo").show();
	}
	else
	{
		$("#buttonNo").hide();
	}
	if(bYes)
	{
		$("#buttonYes").show();
	}
	else
	{
		$("#buttonYes").hide();
	}
}
