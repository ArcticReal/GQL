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

const GoodIdentificationInputType = new GraphQLInputObjectType({
  name: 'GoodIdentificationInputType',
  description: 'input type for GoodIdentification',

  fields: () => ({
    goodIdentificationTypeId: {type: GraphQLString},
    idValue: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {GoodIdentificationInputType};
    