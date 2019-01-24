
class BuildIcon extends HTMLElement {
    constructor() {
        super();
        this._buildValue = 0;
        this._buildOwner = "";
        this._buildString = "";
        this._buildMulti = false;
    }

    setValue(nValue) {
        this._buildValue = nValue;
    }

    setOwner(nOwner) {
        this._buildOwner = nOwner;
    }

    setString(nString) {
        this._buildString = nString;
    }

    setMulit(nBool) {
        this._buildMulti = nBool;
    }

    changeBackground(flag) {
        var iconView = this.querySelector('.build-icon');

        if (flag == 0) {
            if (this._buildOwner == "Computer") {
                iconView.style.backgroundColor = "rgb(109, 0, 67)";
            }
            else {
                iconView.style.backgroundColor = "rgb(37, 185, 154)";
            }
        }
        else if (flag == 1) {
            iconView.style.backgroundColor = "rgb(0, 161, 75)";
        }
        else {

        }
    }

    connectedCallback() {
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
        this.innerHTML = template;

        var iconView = this.querySelector('.build-icon');
        var multiView = this.querySelector('.build-icon-multi');
        var valueView = this.querySelector('.build-icon-value');
        var stringView = this.querySelector('.build-icon-string');

        if (this._buildOwner == "Computer") {
            iconView.style.backgroundColor = "rgb(109, 0, 67)";
        }

        if (!this._buildMulti) {
            multiView.style.visibility = "hidden";
        }

        valueView.innerHTML = this._buildValue;
        stringView.innerHTML = this._buildString;
    }
}

window.customElements.define('x-build-icon', BuildIcon);