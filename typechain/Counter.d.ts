/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CounterInterface extends ethers.utils.Interface {
  functions: {
    "count()": FunctionFragment;
    "decrement()": FunctionFragment;
    "getCount()": FunctionFragment;
    "getName()": FunctionFragment;
    "increment()": FunctionFragment;
    "name()": FunctionFragment;
    "setName(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(functionFragment: "decrement", values?: undefined): string;
  encodeFunctionData(functionFragment: "getCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(functionFragment: "increment", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "setName", values: [string]): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decrement", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;

  events: {};
}

export class Counter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CounterInterface;

  functions: {
    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    "count()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    decrement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "decrement()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getName(
      overrides?: CallOverrides
    ): Promise<[string] & { currentName: string }>;

    "getName()"(
      overrides?: CallOverrides
    ): Promise<[string] & { currentName: string }>;

    increment(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "increment()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    setName(
      _newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setName(string)"(
      _newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  count(overrides?: CallOverrides): Promise<BigNumber>;

  "count()"(overrides?: CallOverrides): Promise<BigNumber>;

  decrement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "decrement()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getName(overrides?: CallOverrides): Promise<string>;

  "getName()"(overrides?: CallOverrides): Promise<string>;

  increment(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "increment()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  setName(
    _newName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setName(string)"(
    _newName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    "count()"(overrides?: CallOverrides): Promise<BigNumber>;

    decrement(overrides?: CallOverrides): Promise<BigNumber>;

    "decrement()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<string>;

    "getName()"(overrides?: CallOverrides): Promise<string>;

    increment(overrides?: CallOverrides): Promise<BigNumber>;

    "increment()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    setName(_newName: string, overrides?: CallOverrides): Promise<string>;

    "setName(string)"(
      _newName: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    "count()"(overrides?: CallOverrides): Promise<BigNumber>;

    decrement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "decrement()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    "getName()"(overrides?: CallOverrides): Promise<BigNumber>;

    increment(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "increment()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    setName(
      _newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setName(string)"(
      _newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "count()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decrement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "decrement()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increment(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "increment()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setName(
      _newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setName(string)"(
      _newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
