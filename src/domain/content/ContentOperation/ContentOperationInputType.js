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

const ContentOperationInputType = new GraphQLInputObjectType({
  name: 'ContentOperationInputType',
  description: 'input type for ContentOperation',

  fields: () => ({
    contentOperationId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentOperationInputType};
    