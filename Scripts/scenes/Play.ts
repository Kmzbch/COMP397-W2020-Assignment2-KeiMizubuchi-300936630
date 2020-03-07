module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _ocean?: objects.Ocean;
        private _plane?: objects.Plane;
        private _island?: objects.Island;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            this._island = new objects.Island();
            
             this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();

           this._plane.Update();

           this._island.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);

            this.addChild(this._island);

            this.addChild(this._plane);

        }

        
    }
}