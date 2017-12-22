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

const AccommodationClassResponseType = new GraphQLObjectType({
  name: 'AccommodationClassResponseType',
  description: 'response type for AccommodationClass',

  fields: () => ({
    accommodationClassId: {type: GraphQLString},
    description: {type: GraphQLString},
    parentClassId: {type: GraphQLString}
  })
});

export {AccommodationClassResponseType};
    