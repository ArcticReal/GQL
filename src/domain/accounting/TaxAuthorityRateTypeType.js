
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProductType.js';


const TaxAuthorityRateTypeType = new GraphQLObjectType({
  name: 'TaxAuthorityRateTypeType',
  description: 'Type for TaxAuthorityRateType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    taxAuthorityRateTypeId: {type: GraphQLString},
    taxAuthorityRateProduct: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {taxAuthorityRateTypeId: {type: GraphQLString}},
      resolve: (taxAuthorityRateType, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityRateProducts/find?taxAuthorityRateTypeId=${taxAuthorityRateType.taxAuthorityRateTypeId}`)
    }
  })
});

export {TaxAuthorityRateTypeType};
    