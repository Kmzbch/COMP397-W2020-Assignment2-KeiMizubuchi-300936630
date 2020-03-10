module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _ocean?: objects.Ocean;
        private _avatar?: objects.Avatar;
        private _island?: objects.Island;

        // private _cloud?: objects.Cloud;
        private _cloudNumber: number;
        private _clouds?: objects.Cloud[];

        private _weapons?: objects.Weapon[];

        // PUBLIC PROPERTIES
        public keyPressedStates: boolean[]; // to detect which keys are down

        // CONSTRUCTOR
        constructor() {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void {

            this._ocean = new objects.Ocean();
            this._avatar = new objects.Avatar();
            this._island = new objects.Island();

            this._cloudNumber = config.Game.CLOUD_NUM;
            this._clouds = new Array<objects.Cloud>();

            this._weapons = new Array<objects.Weapon>();

            // create an array of cloud objects
            for (let index = 0; index < this._cloudNumber; index++) {
                this._clouds[index] = new objects.Cloud();
            }

            this.Main();
        }

        public Update(): void {
            this._ocean.Update();

            this._island.Update();

            this._avatar.Update();

            //
            managers.Collision.squaredRadiusCheck(this._avatar, this._island);

            this._clouds.forEach(cloud => {
                cloud.Update();
                managers.Collision.squaredRadiusCheck(this._avatar, cloud);
            });

            this._weapons.forEach(weapon => {
                weapon.Update();
            })

            // alternative
            // for (const cloud of this._clouds) {

            // }

        }

        public Main(): void {
            this.addChild(this._ocean);

            this.addChild(this._island);

            this.addChild(this._avatar);

            this._clouds.forEach(cloud => {
                this.addChild(cloud);
            });

            // weapon

        }


        //
        public DetectClickEvent(): void {
            let weapon = this._avatar.shoot();
            this._weapons.push(weapon);
            this.addChild(weapon);
        }

    }
}