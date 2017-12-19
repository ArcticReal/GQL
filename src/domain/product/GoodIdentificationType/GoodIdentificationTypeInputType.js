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

const GoodIdentificationTypeInputType = new GraphQLInputObjectType({
  name: 'GoodIdentificationTypeInputType',
  description: 'input type for GoodIdentificationType',

  fields: () => ({
    description: {type: GraphQLString},
    goodIdentificationTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {GoodIdentificationTypeInputType};
    