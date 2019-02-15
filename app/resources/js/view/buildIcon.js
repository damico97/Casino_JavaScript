/*
 * ************************************************************
 * * Name:  Joseph Damico                                     *
 * * Project:  Casino JavaScript                              *
 * * Class:  CMPS: 366-01                                     *
 * * Date:  February 15, 2019                                 *
 * ************************************************************
 */

class BuildIcon extends HTMLElement {

    /**
     * constructor(), for the custom BuildIcon
     */
    constructor() {
        super();
        this._buildValue = 0;
        this._buildOwner = "";
        this._buildString = "";
        this._buildMulti = false;
    }


    /**
     * setValue(), Takes in the values for the build to show
     * @param nValue -> The new value for the build
     */
    setValue(nValue) {
        this._buildValue = nValue;
    }


    /**
     * setOwner(), Takes in the owner of the build, and stores it so we can set the color occordingly
     * @param nOwner -> The player that is the owner of the build
     */
    setOwner(nOwner) {
        this._buildOwner = nOwner;
    }


    /**
     * setString(), Sets in the string of the build cards to display
     * @param nString -> The string of the cards that make up of the build
     */
    setString(nString) {
        this._buildString = nString;
    }


    /**
     * setMulti(), Sets if the build is a multi or not to show in the icon
     * @param nBool -> Wether or not the build is a multi-build or not
     */
    setMulti(nBool) {
        this._buildMulti = nBool;
    }


    /**
     * changeBackground(), Set's the background color of the icon, depending if the build was selected or not
     * @param flag -> Weather the build is selected or not
     */
    changeBackground(flag) {
        // Get the Icon
        var iconView = this.querySelector('.build-icon');

        // Build is un selected
        if (flag == 0) {
            // If the owner is the Computer set the background to Purple
            if (this._buildOwner == "Computer") {
                iconView.style.backgroundColor = "rgb(109, 0, 67)";
            }
            // The own is the Human set the background to Blue
            else {
                iconView.style.backgroundColor = "rgb(37, 185, 154)";
            }
        }
        // Build is selected, create background to green
        else if (flag == 1) {
            iconView.style.backgroundColor = "rgb(0, 161, 75)";
        }
        // Error
        else {
            console.log("ERROR - [Build Icon] changeBackground()");
        }
    }


    /**
     * connectedCallback(), Creates the build icon
     */
    connectedCallback() {
        // HTML & CSS for the Build Icon
        var template = `
        <style>
            .build-icon {
                width: 300px;
                height: 125px;
                border-radius: 25px;
                background-color: #25b99a;
                display: inline-block;
                cursor: pointer;
            }

            .build-icon-row {
                display: flex;
                text-align: center;
            }

            .build-icon-column {
                width: 33.3%;
            }

            .build-icon-column_full {
                width: 100%;
            }

            .build-icon-multi {
                margin-top: 10px;
                float: right;
                font-size: 28px;
                font-weight: 500;
                color: #fff;
            }

            .build-icon-prefix {
                margin-top: 10px;
                float: right;
                padding-right: 5px;
                font-size: 28px;
                font-weight: 500;
                color: #fff;
            }

            .build-icon-value {
                margin-top: 10px;
                font-size: 28px;
                font-weight: 600;
                color: #fff;
                float: left;
            }

            .build-icon-string {
                margin-top: 10px;
                font-size: 24px;
                font-weight: 500;
                color: #fff;
                display: inline-block;
            }
        </style>
        <div class="build-icon">
            <div class="build-icon-row">
                <div class="build-icon-column">
                    <div class="build-icon-multi">Multi</div>
                </div>

                <div class="build-icon-column">
                    <div class="build-icon-prefix">Value:</div>
                </div>

                <div class="build-icon-column">
                    <div class="build-icon-value">10</div>
                </div>
            </div>
            <div class="build-icon-row">
                <div class="build-icon-column_full">
                    <div class="build-icon-string">[ [HA C2 D7] ]</div>
                </div>
            </div>
        </div>
        `;
        // Set the HTML
        this.innerHTML = template;

        // Set the Build Icon details
        var iconView = this.querySelector('.build-icon');
        var multiView = this.querySelector('.build-icon-multi');
        var valueView = this.querySelector('.build-icon-value');
        var stringView = this.querySelector('.build-icon-string');

        // Change the color if the owner is the computer
        if (this._buildOwner == "Computer") {
            iconView.style.backgroundColor = "rgb(109, 0, 67)";
        }

        // Show the Multi tag if it's a multi-build
        if (!this._buildMulti) {
            multiView.style.visibility = "hidden";
        }

        // Set the build value and string
        valueView.innerHTML = this._buildValue;
        stringView.innerHTML = this._buildString;
    }
}

// Define the Icon Name
window.customElements.define('x-build-icon', BuildIcon);