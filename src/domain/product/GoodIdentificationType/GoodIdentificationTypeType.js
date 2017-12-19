
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

import {GoodIdentificationType} from '../../product/GoodIdentification/GoodIdentificationType.js';


const GoodIdentificationTypeType = new GraphQLObjectType({
  name: 'GoodIdentificationTypeType',
  description: 'Type for GoodIdentificationType in product',

  fields: () => ({
    parentType: {
      type: GoodIdentificationTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (goodIdentificationType, args, {loaders}) => loaders.ofbiz.load(`product/goodIdentification/goodIdentificationTypes/find?goodIdentificationTypeId=${goodIdentificationType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    goodIdentificationTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    goodIdentificationTypes: {
      type: new GraphQLList(GoodIdentificationTypeType),
      args : {},
      resolve: (goodIdentificationType, args, {loaders}) => loaders.ofbizArray.load(`product/goodIdentification/goodIdentificationTypes/find?goodIdentificationTypeId=${goodIdentificationType.goodIdentificationTypeId}`)
    },
    goodIdentifications: {
      type: new GraphQLList(GoodIdentificationType),
      args : {},
      resolve: (goodIdentificationType, args, {loaders}) => loaders.ofbizArray.load(`product/goodIdentifications/find?goodIdentificationTypeId=${goodIdentificationType.goodIdentificationTypeId}`)
    }
  })
});

export {GoodIdentificationTypeType};
    