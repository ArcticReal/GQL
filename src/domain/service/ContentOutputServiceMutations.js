import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createFileFromScreen = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFileFromScreen method',
  args:{fileName: {type: GraphQLString},screenLocation: {type: GraphQLString},screenContext: {type: GraphQLString},filePath: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentOutput/createFileFromScreen?fileName=${args.fileName}screenLocation=${args.screenLocation}screenContext=${args.screenContext}filePath=${args.filePath}contentType=${args.contentType}`, null, req);
  }
};
export {createFileFromScreen};


const sendPrintFromScreen = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendPrintFromScreen method',
  args:{screenLocation: {type: GraphQLString},screenContext: {type: GraphQLString},printerName: {type: GraphQLString},contentType: {type: GraphQLString},printerContentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentOutput/sendPrintFromScreen?screenLocation=${args.screenLocation}screenContext=${args.screenContext}printRequestAttributes=${args.printRequestAttributes}printerName=${args.printerName}docAttributes=${args.docAttributes}contentType=${args.contentType}printerContentType=${args.printerContentType}`, null, req);
  }
};
export {sendPrintFromScreen};
