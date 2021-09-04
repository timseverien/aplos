import { Datatype } from './Datatype';

export interface Socket {
	name: string
	type: Datatype
}

export interface Node {
	inputs: Socket[]
	outputs: Socket[]
}
