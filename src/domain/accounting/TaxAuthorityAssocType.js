
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

import {TaxAuthorityAssocType} from '../accounting/TaxAuthorityAssoc.js';


const TaxAuthorityAssocTypeType = new GraphQLObjectType({
  name: 'TaxAuthorityAssocTypeType',
  description: 'Type for TaxAuthorityAssocType in accounting',

  fields: () => ({
    taxAuthorityAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    taxAuthorityAssocs: {
      type: new GraphQLList(TaxAuthorityAssocType),
      args : {taxAuthorityAssocTypeId: {type: GraphQLString}},
      resolve: (taxAuthorityAssocType, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityAssocs/find?taxAuthorityAssocTypeId=${taxAuthorityAssocType.taxAuthorityAssocTypeId}`)
    }
  })
});

export {TaxAuthorityAssocTypeType};
    




const TaxAuthorityAssocTypeInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityAssocTypeInputType',
  description: 'input type for TaxAuthorityAssocType in accounting',

  fields: () => ({
    taxAuthorityAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {TaxAuthorityAssocTypeInputType};
    