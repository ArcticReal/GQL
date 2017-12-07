
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {TaxAuthorityAssocType} from '../accounting/TaxAuthorityAssocType.js';


const TaxAuthorityAssocTypeType = new GraphQLObjectType({
  name: 'TaxAuthorityAssocTypeType',
  description: 'Type for TaxAuthorityAssocType in accounting',

  fields: () => ({
    taxAuthorityAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    taxAuthorityAssoc: {
      type: new GraphQLList(TaxAuthorityAssocType),
      args : {taxAuthorityAssocTypeId: {type: GraphQLString}},
      resolve: (taxAuthorityAssocType, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityAssocs/find?taxAuthorityAssocTypeId=${taxAuthorityAssocType.taxAuthorityAssocTypeId}`)
    }
  })
});

export {TaxAuthorityAssocTypeType};
    