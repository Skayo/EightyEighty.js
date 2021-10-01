import { u8 } from 'typed-numbers';

export interface Machine {

	/**
	 * Handle input
	 * @param port
	 */
	input(port: u8): u8;

	/**
	 * Handle output
	 * @param port
	 * @param byte
	 */
	output(port: u8, byte: u8): void;

}
