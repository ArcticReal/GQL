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

const FacilityContactMechResponseType = new GraphQLObjectType({
  name: 'FacilityContactMechResponseType',
  description: 'response type for FacilityContactMech',

  fields: () => ({
    comments: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    extension: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContactMechResponseType};
    