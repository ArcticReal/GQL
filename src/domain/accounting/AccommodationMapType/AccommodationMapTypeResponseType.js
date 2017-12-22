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

const AccommodationMapTypeResponseType = new GraphQLObjectType({
  name: 'AccommodationMapTypeResponseType',
  description: 'response type for AccommodationMapType',

  fields: () => ({
    accommodationMapTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AccommodationMapTypeResponseType};
    