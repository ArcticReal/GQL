
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GoodIdentificationType} from '../product/GoodIdentificationType.js';


const GoodIdentificationTypeType = new GraphQLObjectType({
  name: 'GoodIdentificationTypeType',
  description: 'Type for GoodIdentificationType in product',

  fields: () => ({
    parentType: {
      type: GoodIdentificationTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (goodIdentificationType, args, {loaders}) => loaders.ofbiz.load(`goodIdentificationTypes/find?goodIdentificationTypeId=${goodIdentificationType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    goodIdentificationTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    goodIdentificationType: {
      type: new GraphQLList(GoodIdentificationTypeType),
      args : {goodIdentificationTypeId: {type: GraphQLString}},
      resolve: (goodIdentificationType, args, {loaders}) => loaders.ofbizArray.load(`goodIdentificationTypes/find?goodIdentificationTypeId=${goodIdentificationType.goodIdentificationTypeId}`)
    },
    goodIdentification: {
      type: new GraphQLList(GoodIdentificationType),
      args : {goodIdentificationTypeId: {type: GraphQLString}},
      resolve: (goodIdentificationType, args, {loaders}) => loaders.ofbizArray.load(`goodIdentifications/find?goodIdentificationTypeId=${goodIdentificationType.goodIdentificationTypeId}`)
    }
  })
});

export {GoodIdentificationTypeType};
    