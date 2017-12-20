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


const generateQRCodeImage = {
  type: ResopnseType,
  description: 'mutation for ofbiz generateQRCodeImage method',
  args:{message: {type: GraphQLString},logoImage: {type: GraphQLString},logoImageMaxWidth: {type: GraphQLInt},logoImageMaxHeight: {type: GraphQLInt},format: {type: GraphQLString},width: {type: GraphQLInt},verifyOutput: {type: GraphQLBoolean},encoding: {type: GraphQLString},height: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonQrcode/generateQRCodeImage?message=${args.message}logoImage=${args.logoImage}logoImageMaxWidth=${args.logoImageMaxWidth}logoImageMaxHeight=${args.logoImageMaxHeight}format=${args.format}width=${args.width}verifyOutput=${args.verifyOutput}encoding=${args.encoding}height=${args.height}`, null, req);
  }
};
export {generateQRCodeImage};
