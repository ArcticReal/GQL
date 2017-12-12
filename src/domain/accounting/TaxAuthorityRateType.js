
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

import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProduct.js';


const TaxAuthorityRateTypeType = new GraphQLObjectType({
  name: 'TaxAuthorityRateTypeType',
  description: 'Type for TaxAuthorityRateType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    taxAuthorityRateTypeId: {type: GraphQLString},
    taxAuthorityRateProducts: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {},
      resolve: (taxAuthorityRateType, args, {loaders}) => loaders.ofbizArray.load(`accounting/taxAuthority/taxAuthorityRateProducts/find?taxAuthorityRateTypeId=${taxAuthorityRateType.taxAuthorityRateTypeId}`)
    }
  })
});

export {TaxAuthorityRateTypeType};
    




const TaxAuthorityRateTypeInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityRateTypeInputType',
  description: 'input type for TaxAuthorityRateType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    taxAuthorityRateTypeId: {type: GraphQLString}
  })
});

export {TaxAuthorityRateTypeInputType};
    