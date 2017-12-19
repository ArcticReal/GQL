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

const OtherDataResourceInputType = new GraphQLInputObjectType({
  name: 'OtherDataResourceInputType',
  description: 'input type for OtherDataResource',

  fields: () => ({
    dataResourceContent: {type: new GraphQLList(GraphQLString)},
    dataResourceId: {type: GraphQLString}
  })
});

export {OtherDataResourceInputType};
    