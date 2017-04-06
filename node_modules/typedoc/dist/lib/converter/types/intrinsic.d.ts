import * as ts from "typescript";
import { IntrinsicType } from "../../models/index";
import { ConverterTypeComponent, ITypeTypeConverter } from "../components";
import { Context } from "../context";
export declare class IntrinsicConverter extends ConverterTypeComponent implements ITypeTypeConverter<ts.Type> {
    supportsType(context: Context, type: ts.Type): boolean;
    convertType(context: Context, type: ts.Type): IntrinsicType;
}
