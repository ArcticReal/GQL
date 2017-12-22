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
import {GlFiscalTypeResponseType} from '../../accounting/GlFiscalType/GlFiscalTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlFiscalType = {
  type: GlFiscalTypeResponseType,
  description: 'mutation for ofbiz createGlFiscalType method',
  args:{glFiscalTypeToBeAdded: {type: GlFiscalTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glFiscalTypes/add?`, args.glFiscalTypeToBeAdded, req);
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
