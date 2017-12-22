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
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const importIssuerProvision = {
  type: ResponseType,
  description: 'mutation for ofbiz importIssuerProvision method',
  args:{alias: {type: GraphQLString},keystoreName: {type: GraphQLString},componentName: {type: GraphQLString},certString: {type: GraphQLString},importIssuer: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/securityexts/importIssuerProvision?alias=${args.alias}keystoreName=${args.keystoreName}componentName=${args.componentName}certString=${args.certString}importIssuer=${args.importIssuer}`, null, req);
  }
};
export {importIssuerProvision};
