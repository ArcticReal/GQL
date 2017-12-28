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
import {ZipSalesTaxLookupInputType} from '../../accounting/ZipSalesTaxLookup/ZipSalesTaxLookupInputType.js';
import {ZipSalesTaxLookupResponseType} from '../../accounting/ZipSalesTaxLookup/ZipSalesTaxLookupResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createZipSalesTaxLookup = {
  type: ZipSalesTaxLookupResponseType,
  description: 'mutation for ofbiz createZipSalesTaxLookup method',
  args:{zipSalesTaxLookupToBeAdded: {type: ZipSalesTaxLookupInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/zipSalesTaxLookups/add?`, args.zipSalesTaxLookupToBeAdded, req);
  }
};
export {createZipSalesTaxLookup};


const updateZipSalesTaxLookup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateZipSalesTaxLookup method',
  args:{zipSalesTaxLookupToBeUpdated: {type: ZipSalesTaxLookupInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/zipSalesTaxLookups/${args.nullVal}?`, args.zipSalesTaxLookupToBeUpdated, req);
  }
};
export {updateZipSalesTaxLookup};


const deleteZipSalesTaxLookupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteZipSalesTaxLookupByIdUpdated method',
  args:{zipSalesTaxLookupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/zipSalesTaxLookups/${args.zipSalesTaxLookupId}?`, null, req);
  }
};
export {deleteZipSalesTaxLookupByIdUpdated};
