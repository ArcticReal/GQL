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

const OtherDataResourceResponseType = new GraphQLObjectType({
  name: 'OtherDataResourceResponseType',
  description: 'response type for OtherDataResource',

  fields: () => ({
    dataResourceContent: {type: new GraphQLList(GraphQLString)},
    dataResourceId: {type: GraphQLString}
  })
});

export {OtherDataResourceResponseType};
    