
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


const GoodIdentificationType = new GraphQLObjectType({
  name: 'GoodIdentificationTypeType',
  description: 'Type for GoodIdentificationType in product',

  fields: () => ({
    parentType: {
      type: GoodIdentificationTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (goodIdentificationType, args, {loaders}) => loaders.ofbizArray.load(`goodIdentificationTypes/find?goodIdentificationTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    goodIdentificationTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {GoodIdentificationType};
    