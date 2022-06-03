class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[], connectedTo: string) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this. _connections = connections;
    this._connectedTo = connectedTo;
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set newConnection(newConnection: string) {
    if (this._connections.includes(newConnection)) {
      this._connectedTo = newConnection;
      console.log(`Connection changed to ${newConnection}`);
    } else {
        console.log('Sorry, connection unavailable!');
    }
  }

  turnOn() {
    console.log(`Televisão ${this._brand} ${this._size}", resolução ${this._resolution}, com conexões ${this._connections.join(', ')}, connectado pela porta ${this._connectedTo}`);
  }
}

const tv1 = new TV('AOC', 42, '4k', ['HDMI', 'DisplayPort', 'VGA'], 'HDMI');
tv1.turnOn();
tv1.newConnection = 'VGA'
tv1.turnOn();