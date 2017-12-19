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
import {ZipSalesRuleLookupInputType} from '../../accounting/ZipSalesRuleLookup/ZipSalesRuleLookupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createZipSalesRuleLookup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createZipSalesRuleLookup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/zipSalesRuleLookups/add?`, null, req);
  }
};
export {createZipSalesRuleLookup};


const updateZipSalesRuleLookup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateZipSalesRuleLookup method',
  args:{zipSalesRuleLookupToBeUpdated: {type: ZipSalesRuleLookupInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/zipSalesRuleLookups/${args.nullVal}?`, args.zipSalesRuleLookupToBeUpdated, req);
  }
};
export {updateZipSalesRuleLookup};


const deleteZipSalesRuleLookupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteZipSalesRuleLookupByIdUpdated method',
  args:{zipSalesRuleLookupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/zipSalesRuleLookups/${args.zipSalesRuleLookupId}?`, null, req);
  }
};
export {deleteZipSalesRuleLookupByIdUpdated};
