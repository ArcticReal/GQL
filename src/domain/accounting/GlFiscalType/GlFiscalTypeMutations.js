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
import {GlFiscalTypeInputType} from '../../accounting/GlFiscalType/GlFiscalTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlFiscalType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlFiscalType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glFiscalTypes/add?`, null, req);
  }
};
export {createGlFiscalType};


const updateGlFiscalType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlFiscalType method',
  args:{glFiscalTypeToBeUpdated: {type: GlFiscalTypeInputType},glFiscalTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glFiscalTypes/${args.glFiscalTypeId}?`, args.glFiscalTypeToBeUpdated, req);
  }
};
export {updateGlFiscalType};


const deleteGlFiscalTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlFiscalTypeByIdUpdated method',
  args:{glFiscalTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glFiscalTypes/${args.glFiscalTypeId}?`, null, req);
  }
};
export {deleteGlFiscalTypeByIdUpdated};
