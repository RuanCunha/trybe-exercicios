class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string;
  connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string, connectedTo: string) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this. connections = connections;
    this.connectedTo = connectedTo;
  }

  turnOn() {
    console.log(`Televisão ${this.brand} ${this.size}", resolução ${this.resolution}, com conexões ${this.connections}, connectado pela porta ${this.connectedTo}`);
  }
}

const tv1 = new TV('AOC', 42, '4k', 'HDMI, DisplayPort, VGA', 'HDMI');
tv1.turnOn;
